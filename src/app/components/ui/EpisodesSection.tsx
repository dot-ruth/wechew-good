"use client";
import * as React from "react";
import { useState } from "react";
import episodes from "@/app/Interface/episodes";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/components/ui/card";

const EpisodesSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const paginatedEpisodes = episodes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(episodes.length / itemsPerPage);

  return (
    <section className="container mx-auto py-12 px-4">
      <h3 className="text-2xl font-bold mb-6">Recent Episodes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedEpisodes.map((episode) => (
          <Card key={episode.id} className="bg-yellow-300/90">
            <CardHeader>
              <CardTitle className="text-blue-900">{episode.title}</CardTitle>
              <CardDescription> {episode.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={episode.thumbnail}
                alt={`Thumbnail for ${episode.title}`}
                width={200}
                height={100}
                className="w-full rounded-lg mb-4"
              />
            </CardContent>
            <CardFooter>
               <a href={episode.link} target="_blank">
              <button className="px-4 py-2 text-blue-700 border border-blue-700 rounded hover:bg-blue-700 hover:text-yellow-400">
                Listen
              </button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-700 text-yellow-400 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-700 text-yellow-400 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default EpisodesSection;
