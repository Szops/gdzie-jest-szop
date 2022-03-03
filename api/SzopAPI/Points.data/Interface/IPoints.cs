using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using API.data.Model;
using System.Threading.Tasks;


namespace API.data.Interface
{
    public interface IPoints
    {
        List<Point> GetAllPoints();
        Point GetPoint(int id);
    }
}
