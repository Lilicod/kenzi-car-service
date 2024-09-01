import Layout from "@/layout/Layout";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Success() {
  return (
    <Layout>
      <div className="h-screen flex flex-col gap-5 justify-center items-center">
        <FaCheckCircle className="text-9xl text-green-500" />
        <h1 className="text-3xl font-bold">Payment Successful</h1>

        <Link
          href="/"
          className="px-4 py-2 font-medium hover:bg-primary hover:text-white text-black rounded-lg border border-primary"
        >
          Return To Home Page
        </Link>
      </div>
    </Layout>
  );
}
