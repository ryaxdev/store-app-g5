import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link  from "next/link";

export default function ProductCard({product}: any) {
  return (
    <div className="container mx-auto my-8">
      <Card className="w-full h-full rounded-lg">
        <Image 
            layout="responsive"
            objectFit="cover"
            src={
                `http://127.0.0.1:8090/api/files/${product.collectionId}/${product.id}/${product.imagen}` || ""
            }
            width="300" height="300"
            className="rounded-lg w-300 h-300 items-center justify-center"
            alt={product.nombre}
        />
        <CardHeader>
          <h1>{product.nombre}</h1>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{product.descripcion}</p>
          <Link 
            href={`/productos/${product.id}`} 
            className={buttonVariants({})}
          >
            Detalles
        </Link>
        </CardContent>
      </Card>
    </div>
  )
}

