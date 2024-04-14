import Dashboard from "../Dashboard";
import Request from "../Pages/Request";
import Review from "../Pages/Review";
import Schedule from "../Pages/Schedule";
import ServiceManagement from "../Pages/ServiceManagement";

export const PageComponent = ({ link }) => {
    let pageComponent = null;
  
    switch (link.name) {
      case "Dashboard":
        pageComponent = <Dashboard />;
        break;
      case "Service.M":
        pageComponent = <ServiceManagement />;
        break;
      case "Request":
        pageComponent = <Request />;
        break;
      case "Schedule":
        pageComponent = <Schedule />;
        break;
      case "Review":
        pageComponent = <Review />;
        break;
      default:
        pageComponent = null;
    }
  
    return pageComponent;
  };