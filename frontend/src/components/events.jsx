
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./events.css";

const eventDetails = [
  {
      title: "Maidan-E-Jung",
      time: "17 March",
      participation: "15",
      fee: "Rs.100",
      due: "15 March",
      rulebookLink: "https://bit.ly/3HhOknh",
      
  },
  {
      title: "Comedy-Cruch",
      time: "17 March",
      participation: "1",
      fee: "Rs.50",
      due: "15 March",
      rulebookLink: "https://bit.ly/47uGnWJ",
  },
  {
      title: "Kala Pravah",
      time: "17 March",
      participation: "1",
      fee: "Rs.50",
      due: "15 March",
      rulebookLink: "https://bit.ly/3O2xb4T",
  },
  {
      title: "A MOVABLE FEAST",
      time: "17 March",
      participation: "1",
      fee: "Rs.80",
      due: "15 March",
      rulebookLink: " https://bit.ly/4aQ9lDn",
  },
  {
      title: "MONOCHROME",
      time: "17 March",
      participation: "1",
      fee: "Rs.100",
      due: "15 March",
      rulebookLink: "https://bit.ly/48wqekV",
  },
  {
      title: "IMAGINATION STATION",
      time: "18 March",
      participation: "5",
      fee: "Rs.120",
      due: "15 March",
      rulebookLink: "https://bit.ly/3TUCTtn",
  },
  {
      title: "PROTO UI",
      time: "17 March",
      participation: "5",
      fee: "Rs.90",
      due: "15 March",
      rulebookLink: "https://bit.ly/3RXRrG6",
  },
  {
      title: "PHOTOSHOP WARS",
      time: "18 March",
      participation: "1",
      fee: "Rs.70",
      due: "15 March",
      rulebookLink: "https://bit.ly/3O2Utrq",
  },
  {
      title: "BRANDxPERIENCE",
      time: "18 March",
      participation: "3",
      fee: "Rs.50",
      due: "15 March",
      rulebookLink: "//bit.ly/48V1VfY",
  },
  {
      title: "DARPAN",
      time: "18 March",
      participation: "5",
      fee: "Rs.150",
      due: "15 March",
      rulebookLink: "https://bit.ly/48VV3PO",
  },
  {
      title: "BLACKOUT",
      time: "17 March",
      participation: "1",
      fee: "Rs.100",
      due: "15 March",
      rulebookLink: "https://bit.ly/3U4ApbQ",
  },
  {
      title: "STEP UP",
      time: "17 March",
      participation: "5",
      fee: "Rs.120",
      due: "15 March",
      rulebookLink: "//bit.ly/3SjZ8HO",
  },
  {
      title: "GROOVE GALA",
      time: "17 March",
      participation: "10",
      fee: "Rs.50",
      due: "15 March",
      rulebookLink: " https://bit.ly/302giqW",
  },
  {
      title: "SYNGPHONY",
      time: "18 March",
      participation: "1",
      fee: "Rs.70",
      due: "15 March",
      rulebookLink: "https://bit.ly/3SmjJeU",
  },
  {
      title: "MR ANDMS ANWESHA",
      time: "17 March",
      participation: "1",
      fee: "Rs.80",
      due: "15 March",
      rulebookLink: "https://bit.ly/3ShNEol",
  },
  {
      title: "HEEL TURN",
      time: "18 March",
      participation: "1",
      fee: "Rs.40",
      due: "15 March",
      rulebookLink: "https://bit.ly/4aY5LqQ",
  },
  {
      title: "ANIMECON",
      time: "18 March",
      participation: "1",
      fee: "Rs.40",
      due: "15 March",
      rulebookLink: "https://bit.ly/3tUHI4R",
  },
  {
      title: "VERVE",
      time: "18 March",
      participation: "15",
      fee: "Rs.40",
      due: "15 March",
      rulebookLink: "https://bit.ly/48QTfaH",
  },
  {
      title: "CHARACTERIZE",
      time: "18 March",
      participation: "1",
      fee: "Rs.40",
      due: "15 March",
      rulebookLink: "https://bit.ly/3vDWwMd",
  },
  {
      title: "EMBLEM",
      time: "18 March",
      participation: "5",
      fee: "Rs.40",
      due: "15 March",
      rulebookLink: "https://bit.ly/4aRXjcq",
  },
  {
      title: "12 HOURS BILLIONAIRES",
      time: "18 March",
      participation: "1",
      fee: "Rs.40",
      due: "15 March",
      rulebookLink: "https://bit.ly/3HlA399",
  },
  {
      title: "THE ESCAPE ROOM",
      time: "18 March",
      participation: "1",
      fee: "Rs.40",
      due: "15 March",
      rulebookLink: "https://bit.ly/428TEDi",
  },
  
  {
      title: "EKAL",
      time: "18 March",
      participation: "1",
      fee: "Rs.40",
      due: "15 March",
      rulebookLink: " https://bit.ly/48U8SOp",
  },
  

  {
      title: "SILENT EXPO",
      time: "18 March",
      participation: "1",
      fee: "Rs.40",
      due: "15 March",
      rulebookLink: "https://bit.ly/48VSaOH",
  },
  {
      title: "PHOTOSTORY",
      time: "18 March",
      participation: "1",
      fee: "Rs.40",
      due: "15 March",
      rulebookLink: "https://bit.ly/3SnHi6P",
  },
];

const App = () => {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // to navigate 
  const imagePath = "/events/p";
  const imageCount = 25;

  const openModal = (eventDetail) => {
    console.log("Image clicked:", eventDetail); 
    setModalData(eventDetail);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Modal closed"); 
    setIsModalOpen(false);
  };

  const handleRegister = () => {
    if (modalData) {
      navigate("/eventregister", { state: modalData });
    }
  };

  return (
    <div>
      <main className="main-events">
        <div id="heading-events">EVENTS</div>
        <div className="row2-events" id="events-row">
      {Array.from({ length: imageCount }, (_, i) => {
  const eventDetail = eventDetails[i] || {
    title: `Event ${i + 1}`,
    time: "To be announced",
    participation: "To be announced",
    fee: "Free",
    due: "N/A",
  };

  return (
    <img
     className="img-events"
      key={i}
      src={`${imagePath}${i + 1}.png`}
      alt={`Event ${i + 1}`}
      onClick={() => openModal(eventDetail)}
      style={{ cursor: "pointer" }}
    />
  );
})}

        </div>
      </main>

      {isModalOpen && modalData && (
        <div
          id="modal"
          className="modal"
          onClick={closeModal}
          style={{
            display: "flex",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} 
          >
            <span
              className="close-btn-events"
              onClick={closeModal}
          
            >
              &times;
            </span>
            <h2 id="modal-title">{modalData.title}</h2>
<p className="p" id="time">Date: {modalData.time}</p>
<p className="p" id="participation">Participation: {modalData.participation}</p>
<p className="p" id="fee">Registration Fee: {modalData.fee}</p>
<p className="p" id="due">Registration closes on: {modalData.due}</p>
<button className="event_button" onClick={handleRegister} style={{ marginRight: "10px" }}>
  Register
</button>

            
<button
className="event_button"
onClick={() => window.open(modalData.rulebookLink, "_blank")}
>
Rulebook
</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default App;

