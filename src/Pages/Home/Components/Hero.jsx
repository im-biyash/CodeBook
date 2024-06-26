import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] bg-white flex flex-col justify-evenly lg:flex-row items-center gap-5 py-10 lg:py-20 dark:bg-slate-800 dark:text-slate-100">
      <div className="left my-5 mx-2">
        <h1 className="text-5xl font-bold">The Ultimate Ebook Store</h1>
        <p className="text-2xl my-7 px-1">
          Codebook is the world's most popular platform for computer science ebooks. Find ratings and access new books digitally.
        </p>
        <Link
          to="/products"
          className="text-center btn bg-blue-600 px-2 py-3 rounded text-white"
        >
          EXPLORE
        </Link>
      </div>
      <div className="right my-5 lg:max-w-xl">
        <img
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded mx-2 max-h-full"
          alt=""
        />
      </div>
    </section>
  );
};
