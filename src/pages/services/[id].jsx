import Banner from "@/components/Banner";
import ServiceCard from "@/components/cards/ServiceCard";
import Header from "@/components/Header";
import Layout from "@/layout/Layout";
import { services } from "@/utile/lib";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const fetchServiceById = async (id) => {
  return services.find((service) => service.id === id);
};

export default function ServicePage() {
  const router = useRouter();
  const { id } = router.query; // Get the service ID from the URL

  const [service, setService] = React.useState(null);

  React.useEffect(() => {
    if (id) {
      // Fetch service data based on ID
      fetchServiceById(id).then((data) => {
        setService(data);
      });
    }
  }, [id]);

  if (!service) return <p>Loading...</p>;

  return (
    <Layout>
      <Banner image={service.image} header={service.name}  />
      <div className="flex flex-col gap-5 max-w-[75rem] mx-auto pb-4">
        <p className="text-black text-center lg:text-start font-poppins text-xl font-medium pt-12 mx-auto">{service.description}</p>
        <Link
          href={"/get-a-quote"}
          className="rounded-lg bg-primary font-poppins text-white font-medium py-3 px-6 flex justify-center w-fit mx-auto lg:mx-0 mt-4"
        >
          Reserve Now
        </Link>
      </div>
      <Header title={"Explore more services"} />
      <div className="flex flex-wrap flex-col md:flex-row lg:flex-row gap-5 max-w-[75rem] mx-auto pb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
    </Layout>
  );
}
