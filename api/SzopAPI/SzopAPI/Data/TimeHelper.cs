namespace SzopAPI.Data
{
    public class TimeHelper
    {
        /// <summary>
        /// Search for dates in point's openeningDateTimes and checks if the point is going to be open today.
        /// (Does not include past dates even if it was today)
        /// </summary>
        /// <param name="openingDateTimes">List of point's opening dateTimes</param>
        /// <returns>Ttrue if point is going to be open today</returns>
        public static bool IsPointOpenToday(List<DateTime> openingDateTimes)
        {
            bool isOpen = false;
            foreach (DateTime date in openingDateTimes)
            {
                if (date.Date == DateTime.Today)
                {
                    isOpen = true;
                    break;
                }
            }

            return isOpen;
        }

        /// <summary>
        /// Search for dates in point's openeningDateTimes and checks if the point is going to be open within x hours.
        /// </summary>
        /// <param name="openingDateTimes">List of point's opening dateTimes</param>
        /// <param name="numberOfHours"></param>
        /// <returns></returns>
        public static bool IsPointOpenSoon(List<DateTime> openingDateTimes, int numberOfHours)
        {
            bool isOpenSoon = false;

            foreach (DateTime date in openingDateTimes)
            {
                TimeSpan diff = date - DateTime.Today;
                double hours = diff.TotalHours;
                if (hours > 0 && date > DateTime.Today && hours < numberOfHours)
                {
                    isOpenSoon = true;
                    break;
                }
            }

            return isOpenSoon;
        }
    }
}