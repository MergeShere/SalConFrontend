import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import PaymentInformation from '../components/bookings/PaymentInformation';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setBookingInfo } from '../redux/features/serviceSelectionSlice';
import { useNavigate } from 'react-router-dom';

interface CalendarDay {
  date: number;
  fullDate: Date;
  isCurrentMonth: boolean;
  isPast: boolean;
  isToday: boolean;
  isSelectable: boolean;
}

interface SimpleDate {
  date: number;
  day: string;
  fullDate: Date;
  isPast: boolean;
  isSelectable: boolean;
}

function SelectTimePage() {
  const dispatch = useAppDispatch();
const navigate = useNavigate();
  const { selectedServices } = useAppSelector(state => state.selection);

  const today = new Date();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM'
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get calendar data for full calendar view
  const getCalendarData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const currentDateObj = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(currentDateObj);
      const isCurrentMonth = date.getMonth() === month;
      const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isToday = date.toDateString() === today.toDateString();
      
      days.push({
        date: date.getDate(),
        fullDate: new Date(date),
        isCurrentMonth,
        isPast,
        isToday,
        isSelectable: isCurrentMonth && !isPast
      });
      
      currentDateObj.setDate(currentDateObj.getDate() + 1);
    }
    
    return days;
  };

  // Get simple date selection data (next 5 days)
  const getSimpleDates = () => {
    const dates = [];
    const startDate = new Date(today);
    
    for (let i = 0; i < 5; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      dates.push({
        date: date.getDate(),
        day: dayNames[date.getDay()].substring(0, 3),
        fullDate: new Date(date),
        isPast: false,
        isSelectable: true
      });
    }
    
    return dates;
  };

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    
    const newYear = newDate.getFullYear();
    const newMonth = newDate.getMonth();
    const lastDayOfMonth = new Date(newYear, newMonth + 1, 0);
    
    if (lastDayOfMonth >= today) {
      setCurrentDate(newDate);
    }
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const handleDateSelect = (dateObj: CalendarDay) => {
    setSelectedDate(dateObj.fullDate);
    setShowCalendar(false);
  };

  const handleSimpleDateSelect = (dateObj: SimpleDate) => {
    setSelectedDate(dateObj.fullDate);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedTime && selectedDate) {
      // Dispatch action to save booking information
      dispatch(setBookingInfo({ date: selectedDate, time: selectedTime }));
      
      console.log('Continue to next step with:', {
        date: selectedDate,
        time: selectedTime,
        services: selectedServices
      });
      
      // Navigate to payment page (to be implemented)
      navigate('/payment');
    }
  };

  const calendarDays = getCalendarData();
  const simpleDates = getSimpleDates();
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  const formatDisplayDate = () => {
    if (selectedDate) {
      const month = monthNames[selectedDate.getMonth()];
      return `${selectedDate.getDate()} ${month} ${selectedDate.getFullYear()}`;
    }
    return `${currentMonth} ${currentYear}`;
  };

  return (
    <div className="custom-container py-5 px-4 sm:px-6 lg:px-8 lg:py-10">
      <div>
        <div>
          <h3 className='text-[#52525B] text-sm capitalize font-jarkataLight'>
            product-Stone Ocean Salon-Services-Time
          </h3>

          <div className="pt-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl capitalize font-jarkataBold">
              Stone ocean salon
            </h1>

            <div className="pt-5">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20">
                
                {/* Left side - Time Selection */}
                <div>
                  <h1 className="text-[18px] mb-10 text-[#3F3F46] lg:text-2xl font-jarkataLight">
                    Select Time
                  </h1>

                  {/* Calendar Section */}
                  <div className="mb-8">
                    {/* Calendar Dropdown Trigger */}
                    <div 
                      onClick={toggleCalendar}
                      className="flex items-center gap-2 mb-4 p-3 border border-gray-300 rounded-md cursor-pointer hover:border-gray-400 transition-all bg-white w-fit"
                    >
                      <Calendar className="w-5 h-5 text-gray-600" />
                      <span className="font-jarkataLight text-gray-800">
                        {formatDisplayDate()}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-gray-600 ml-2 transition-transform ${showCalendar ? 'rotate-90' : ''}`} />
                    </div>

                    {/* Full Calendar - Shows when dropdown is open */}
                    {showCalendar && (
                      <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-lg mb-4">
                        {/* Month Navigation */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-jarkataLight text-gray-800">
                            {currentMonth} {currentYear}
                          </span>
                          <div className="flex items-center gap-1">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePrevMonth();
                              }}
                              className="p-1 hover:bg-gray-100 rounded"
                              disabled={currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()}
                            >
                              <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNextMonth();
                              }}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <ChevronRight className="w-5 h-5 text-gray-600" />
                            </button>
                          </div>
                        </div>

                        {/* Day Headers */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                          {dayNames.map((day) => (
                            <div key={day} className="text-center text-xs font-jarkataLight text-gray-500 py-2">
                              {day.toUpperCase()}
                            </div>
                          ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1">
                          {calendarDays.map((dayData, index) => {
                            const isSelected = selectedDate && dayData.fullDate.toDateString() === selectedDate.toDateString();
                            
                            return (
                              <div
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (dayData.isSelectable) {
                                    handleDateSelect(dayData);
                                  }
                                }}
                                className={`
                                  aspect-square flex items-center justify-center text-sm cursor-pointer transition-all
                                  ${!dayData.isCurrentMonth 
                                    ? 'text-gray-300' 
                                    : dayData.isPast 
                                    ? 'text-gray-400 cursor-not-allowed' 
                                    : 'text-gray-800 hover:bg-gray-100'
                                  }
                                  ${isSelected 
                                    ? 'bg-black text-white rounded-full font-jarkataBold' 
                                    : dayData.isToday 
                                    ? 'bg-red-100 text-red-600 rounded-full font-jarkataLight' 
                                    : ''
                                  }
                                  ${dayData.isSelectable ? 'hover:bg-gray-100' : ''}
                                `}
                              >
                                {dayData.date}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Simple Date Selection - Shows when calendar is closed */}
                    {!showCalendar && (
                      <div className="flex gap-4 mb-8">
                        {simpleDates.map((dateObj) => {
                          const isSelected = selectedDate && selectedDate.toDateString() === dateObj.fullDate.toDateString();
                          
                          return (
                            <div
                              key={dateObj.date + dateObj.day}
                              onClick={() => handleSimpleDateSelect(dateObj)}
                              className={`flex flex-col items-center p-3 rounded-full cursor-pointer transition-all
                                ${isSelected
                                  ? 'bg-black text-white'
                                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                                }
                                w-16 h-16 justify-center`}
                            >
                              <span className="text-lg font-jarkataBold">{dateObj.date}</span>
                              <span className="text-xs font-jarkataLight">{dateObj.day}</span>
                            </div>
                          );
                        })}
                        <div className="self-center">
                          <ChevronRight className="w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-600" />
                        </div>
                      </div>
                    )}

                    {/* Time Slots */}
                    <div className="space-y-3">
                      {timeSlots.map((time) => (
                        <div
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={`p-4 rounded-md border cursor-pointer transition-all
                            ${selectedTime === time
                              ? 'border-black bg-gray-50 font-jarkataBold'
                              : 'border-[#D9D9D9] hover:border-gray-400 font-jarkataLight'
                            }
                            w-full h-14 flex items-center text-[16px] lg:text-[18px]`}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side - Booking Details */}
                <PaymentInformation
                  buttonText="continue"
                  onContinue={handleContinue}
                  disabled={!selectedTime || !selectedDate}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectTimePage;
