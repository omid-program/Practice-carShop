export interface ICarDatasItem {
      id: string;
      company: string;
      name: string;
      model: string;
      srcImg: string;
      bildYear: string;
      price: number;
      tecInfo: TecInfo;
}

export interface TecInfo {
      motor: string;
      speed: number;
      aceleration: number;
      org: string;
      useFuel: number;
      power: number;
}     

export interface ICarPageParams {
      params: Promise<{ id: string }>;
      searchParams: Promise<{}>;
}

export interface ICarBasket{
      id:string
      qty: number
}
export interface IMotherContext{
      carBasket:ICarBasket[]
      // useCarBaContext:(id:string) => void
      decreseQtyHand:(id:string ) => void
      increseQtyHand:(id:string ) => void
      getQtyVal:(id:string)=>number
      totalQty:number
      
}
export interface PropHanQty{
      id:string
} 
export interface IStoreProps {
      params: Promise<{}>;
      searchParams: Promise<{ page: string; per_page: string; title: string }>;
   }