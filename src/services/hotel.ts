import Base from "./base";

class Hotel extends Base<any, any> {
  findByCity = async (name: string) => {
    return this.http('/api/hotels/search?type=city&name=' + name, "get");
  };
  findTrending = async (url: string) => {
    // TODO: not implemented
    return this.http(url, "get");
  };
  findByType = async (url: string) => {
    // TODO: not implemented
    return this.http(url, "get");
  };
  searchOffers = async (params: any) => {
    // convert object to url search params
    let searchParams = new URLSearchParams();
    for (let key in params) {
      searchParams.set(key, params[key]);
    }
    return this.http('/api/hotels/offer?' + searchParams.toString(), "get");
  };
}

export default new Hotel();
