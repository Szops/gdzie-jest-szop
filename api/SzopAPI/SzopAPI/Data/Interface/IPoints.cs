using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SzopAPI.Data.Model;
using System.Threading.Tasks;


namespace SzopAPI.Data.Interface
{
    public interface IPoints
    {
        List<Point> GetAllPoints();
        Point GetPoint(int id);
    }
}
