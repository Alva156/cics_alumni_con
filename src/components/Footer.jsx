import React from "react";

const Footer = () => {
  return (
    <footer className="bg-fgray p-4 pb-16 pt-10 text-grayt text-xxs md:text-xs">
      <div className="ml-6">
        <aside className="mb-4 ml-12">
          <p>
            2024. University of Santo Tomas. College of Information and
            Computing Sciences
          </p>
        </aside>
        <div className="flex flex-wrap gap-x-4 ml-12">
          <div className="flex flex-col mr-6">
            <div className="mb-2">Andrei Alvarico</div>
            <div className="mb-2">Claire Cruz</div>
            <div className="mb-2">James Lorenz Santos</div>
            <div>Denise Anne Valdivieso</div>
          </div>
          <div className="flex flex-col">
            <div className="mb-2">andreicimoune.alvarico.cics@ust.edu.ph</div>
            <div className="mb-2">alessandraclaire.cruz.cics@ust.edu.ph</div>
            <div className="mb-2">jameslorenz.santos.cics@ust.edu.ph</div>
            <div>deniseanne.valdivieso.cics@ust.edu.ph</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
