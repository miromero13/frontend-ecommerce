import { Card, CardContent } from "@components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@components/ui/carousel";
import { Button } from "@src/common/components/ui/button";
import { useHeader } from "@src/common/hooks"
const products = [
  {
    id: 1,
    name: 'Boat Headphone',
    price: '285.00',
    originalPrice: '375.00',
    imageUrl: 'https://m.media-amazon.com/images/I/61t+VU6ktZL._AC_SY500_.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'MacBook Air Pro',
    price: '900.00',
    originalPrice: '125.000',
    imageUrl: 'https://m.media-amazon.com/images/I/51UORPCHhpL._AC_SX569_.jpg',
    rating: 4
  },
  {
    id: 3,
    name: 'Red Velvet Dress',
    price: '200.00',
    originalPrice: '450.00',
    imageUrl: 'https://m.media-amazon.com/images/I/612bZ4IE8nL._AC_SY500_.jpg',
    rating: 5
  },
  {
    id: 4,
    name: 'Cute Soft Teddybear',
    price: '345.00',
    originalPrice: '425.00',
    imageUrl: 'https://m.media-amazon.com/images/I/51n-FEzeijL._AC_SY500_.jpg',
    rating: 4
  }
];
// https://m.media-amazon.com/images/I/71ozRmXWSLL._AC_SY500_.jpg
// https://m.media-amazon.com/images/I/61iTIlfCryL._AC_SY500_.jpg
function StorePage() {
  useHeader([
    { label: 'Inicio' }
  ])
  return (
    <>
      <section className="p-0 pb-4 gap-4 flex flex-col">
        <article className="relative grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4">
          <div className="bg-white relative rounded-lg shadow-lg overflow-hidden max-h-[480px]">
            <div className="border rounded-2xl p-1 flex flex-row justify-between absolute items-center gap-4 top-0 bottom-0 left-0 right-0 w-fit h-fit m-auto bg-light-bg-secondary">
              <span className="pl-2">
                Ropa femenina
              </span>
              <Button className="rounded-2xl">
                Bs. 200.00
              </Button>
            </div>
            <img src="https://m.media-amazon.com/images/I/61zxya0NPIS._AC_SY500_.jpg" alt="hero-image" className="m-auto object-contain h-full w-fit " />
          </div>
          <div className="flex flex-col gap-4 lg:max-h-[480px]">
            <div className="bg-white relative rounded-lg shadow-lg overflow-hidden max-h-[50%]">
              <div className="border rounded-2xl p-1 flex flex-row justify-between absolute items-center gap-4 top-0 bottom-0 left-0 right-0 w-fit h-fit m-auto bg-light-bg-secondary">
                <span className="pl-2">
                  Ropa femenina
                </span>
                <Button className="rounded-2xl">
                  Bs. 200.00
                </Button>
              </div>
              <img src="https://m.media-amazon.com/images/I/71ozRmXWSLL._AC_SY500_.jpg" alt="hero-image" className="m-auto object-contain h-full w-fit " />
            </div>
            <div className="bg-white relative rounded-lg shadow-lg overflow-hidden max-h-[50%]">
              <div className="border rounded-2xl p-1 flex flex-row justify-between absolute items-center gap-4 top-0 bottom-0 left-0 right-0 w-fit h-fit m-auto bg-light-bg-secondary">
                <span className="pl-2">
                  Ropa femenina
                </span>
                <Button className="rounded-2xl">
                  Bs. 200.00
                </Button>
              </div>
              <img src="https://m.media-amazon.com/images/I/61iTIlfCryL._AC_SY500_.jpg" alt="hero-image" className="m-auto object-contain h-full w-fit " />
            </div>
          </div>
        </article>
      </section>
      <section>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1 space-x-4">
            {products.map((item, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <Card className="p-0 overflow-hidden">
                    <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                      <img src={item.imageUrl} alt={item.name} className="object-cover h-full w-auto" />
                      <div className="border rounded-2xl p-1 flex flex-row justify-between absolute items-center gap-4 bottom-2 left-0 right-0 w-fit h-fit m-auto bg-light-bg-secondary">
                        <span className="pl-2">
                          {/* {item.name} */}
                          Agregar
                        </span>
                        <Button className="rounded-2xl">
                          Bs. {item.price}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>

  )
}

export default StorePage