using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NHRI.Startup))]
namespace NHRI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
