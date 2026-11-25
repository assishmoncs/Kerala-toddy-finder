import { Suspense } from "react";
import ExploreClient from "@/features/explore/ExploreClient";

export const metadata = {
  title: "Explore Shops | Toddy Finder",
  description: "Find toddy shops near you on an interactive map.",
};

export default function ExplorePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Suspense
        fallback={
          <div className="h-full w-full bg-[#fcf9f8] flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-[#003e1c] border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <ExploreClient />
      </Suspense>
    </div>
  );
}
