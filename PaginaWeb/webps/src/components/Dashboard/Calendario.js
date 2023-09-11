  import React from 'react';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
  
  const Calendario = () => {
    const events =[{
      title: 'The Title', // a property!
      start: '2023-09-01T08:00:00', // a property!
      end: '2023-09-01T08:30:00', // a property! ** see important note below about 'end' **
      editable: true
    }

      
    ]
      return (
        <div  style={{ height: "100vh", width: "100%" }}>
          <Fullcalendar
          plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
          initialView= {"dayGridMonth"}
          headerToolbar={{
            start: "today prev next",
            center: "title",
            end:"dayGridMonth timeGridWeek timeGridDay",

          }}
          height={"auto"}
          events={events}
          />
        </div>
          
      )
  }
  
  export default Calendario;
  