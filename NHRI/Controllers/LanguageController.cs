using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Threading;
namespace NHRI.Controllers
{
    public class LanguageController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Change(string LanguageAbb)
        {
            if (LanguageAbb != null)
            {
                Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture(LanguageAbb);
                Thread.CurrentThread.CurrentUICulture = new CultureInfo(LanguageAbb);
            }
            HttpCookie cookie = new HttpCookie("Language");
            cookie.Value = LanguageAbb;
            Response.Cookies.Add(cookie);
            return Redirect(Request.UrlReferrer.ToString());
        }

    }
}