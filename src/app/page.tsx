// import Link from "next/link";

// export default function Home() {
//   return (
    
//         <div>
          
//         </div>
//   );
// }

import { sanityclient } from "../sanity/lib/client"; // Import from existing client.ts
import { urlFor } from "../sanity/lib/image"; // Import from existing image.ts


interface Product {
  _id: string;
  name: string;
  price: number;
  image: any;
}

const getProducts = async () => {
  const query = `*[_type == "product"]{ _id, name, price, image }`;
  return await sanityclient.fetch(query);
};

export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-100 flex flex-col lg:flex-row items-center justify-between p-10">
        <div>
          <h1 className="text-4xl font-bold max-w-lg">
            Best Furniture Collection for Your Interior
          </h1>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Shop Now
          </button>
        </div>
        <div>
          <img
            src="/product Image (1).jpg"
            alt="Chair"
            width={500}
            height={500}
            className="max-w-full"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="flex flex-wrap gap-4">
          {products.slice(0, 4).map((product) => (
            <div key={product._id} className="w-[300px]">
              <img
                src={urlFor(product.image).width(300).url()}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <p className="text-lg font-medium">{product.name}</p>
              <p className="text-blue-500">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Categories */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-4">Top Categories</h2>
        <div className="flex flex-wrap gap-4">
          <img src="/category (2).jpg" alt="Category 1" width={300} height={300} />
          <img src="/Products (7).jpg" alt="Category 2" width={300} height={300} />
          <img src="/category.jpg" alt="Category 3" width={300} height={300} />
          <img src="/Products (6).jpg" alt="Category 3" width={300} height={300} />
        </div>
      </section>

      {/* Explore New Design Section */}
      <section className="p-10 flex flex-col lg:flex-row items-center gap-8">
        <div>
          <h2 className="text-xl font-semibold">
            Explore New Design of Chairs
          </h2>
          <img src="/Frame.jpg" alt="Large Chair" width={500} height={500} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/products (1).jpg" alt="Small Chair 1" width={250} height={250} />
          <img src="/products (2).jpg" alt="Small Chair 2" width={250} height={250} />
          <img src="/products (3).jpg" alt="Small Chair 3" width={250} height={250} />
          <img src="/products (7).jpg" alt="Small Chair 4" width={250} height={250} />
        </div> 
      </section>

      {/* Our Products */}
      <section className="p-10">
        <h2 className="text-2xl font-bold text-center">Our Products</h2>
        <div className="grid grid-cols-4 gap-4 mt-6">
          {products.slice(0, 8).map((product) => (
            <div key={product._id} className="w-[200px]">
              <img
                src={urlFor(product.image).width(200).url()}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-lg"
              />
              <p className="text-lg font-medium">{product.name}</p>
              <p className="text-blue-500">${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


