import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { pb } from '@/lib/pocketbase';
import Link from "next/link";

type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductPagePreview({ params }: Props) {
  const product = await pb.collection('productos').getOne(params.productId, { cache: "no-store" });

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <Image
          alt="Product Image"
          layout="responsive"
          objectFit="cover"
          src={`http://127.0.0.1:8090/api/files/${product.collectionId}/${product.id}/${product.imagen}` || ""}
          width={600}
          height={338} // Mantenemos una relación de aspecto de 16:9
        />
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-2">
          <h1 className="font-bold text-3xl">{product.nombre}</h1>
          <div className="flex items-center gap-2">
            <StarRating stars={product.stars} />
          </div>
          <p>{product.descripcion}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold">${product.precio}</div>
          <Link 
            href="/"
            className={buttonVariants({})}
          >
            Comprar {product.precio}$
        </Link>
        </div>
      </div>
    </div>
  );
}

interface StarRatingProps {
  stars: number;
}

function StarRating({ stars }: StarRatingProps) {
  const totalStars = 5;
  const starElements = [];

  for (let i = 0; i < totalStars; i++) {
    starElements.push(
      <StarIcon key={i} className={`w-5 h-5 ${i < stars ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`} />
    );
  }

  return <div className="flex items-center gap-0.5">{starElements}</div>;
}

interface StarIconProps {
  className?: string;
}

function StarIcon(props: StarIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
