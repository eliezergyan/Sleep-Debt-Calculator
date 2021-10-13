const getSleepHours = day => {
    day = day.toLowerCase();
    switch(day){
      case 'monday':
        return 8;
      case 'tuesday':
        return 3;
      case 'wednesday':
        return 6;
      case 'thursday':
        return 4;
      case 'friday':
        return 7;
      case 'saturday':
        return 6;
      case 'sunday':
        return 5;
    }
  };
  
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday')  + getSleepHours('thursday')  + getSleepHours('friday')  + getSleepHours('saturday')  + getSleepHours('sunday');  
  
const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7; 
  };
  
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours){
      console.log('Perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours){
      const over = actualSleepHours - idealSleepHours;
      console.log('You got too much sleep: Extra ' + over + 'hours.');
    } else {
      const less = idealSleepHours - actualSleepHours;
      console.log('You got ' + less + 'hour(s) less of sleep this week. Get some rest.');
    }
  };
  

calculateSleepDebt();