import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export default function ProjectCard() {
  return (
    <>
      <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
        Mis Proyectos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((project) => (
          <div
            key={project}
            className="border border-zinc-700 rounded-lg p-4 bg-zinc-800"
          >
            <img
              src={`/placeholder.svg?height=200&width=300`}
              alt={`Proyecto ${project}`}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h4 className="text-xl font-semibold mb-2 text-emerald-400">
              Proyecto {project}
            </h4>
            <p className="mb-4 text-zinc-300">
              Descripción breve del proyecto y las tecnologías utilizadas.
            </p>
            <Button
              variant="outline"
              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-zinc-100"
            >
              Ver detalles
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
