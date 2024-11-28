import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid'

import './calendar.css'

export default function Calendar() {
    const eventos = [
        {
          title: 'Reunión de equipo',
          start: '2024-11-16T10:00:00',
          end: '2024-11-16T12:00:00',
          backgroundColor: '#4CAF50',
          borderColor: '#4CAF50'
        },
        {
          title: 'Conferencia',
          start: '2024-11-17T14:00:00',
          end: '2024-11-17T16:00:00',
          backgroundColor: '#2196F3',
          borderColor: '#2196F3'
        },
        {
          title: 'Clases',
          start: '2024-11-24T14:00:00',
          end: '2024-11-24T16:00:00',
          backgroundColor: '#2196F3'
        }
      ];

      
  return (
    <div className='calendarContainer'>
        <FullCalendar
          plugins={[ dayGridPlugin, listPlugin, timeGridPlugin ]}
          events={eventos}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }}
          views={{
            dayGridMonth: { // Vista mensual
              titleFormat: { month: 'long', year: 'numeric' }
            },
            dayGridWeek: { // Vista semanal
              titleFormat: { month: 'long', day: 'numeric' }
            },
            dayGridDay: { // Vista diaria
              titleFormat: { month: 'long', day: 'numeric', weekday: 'long' }
            },
            listWeek: { // Vista de lista
              titleFormat: { month: 'long', year: 'numeric' }
            }
          }}
          buttonText={{
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día',
            list: 'Lista'
          }}
          locale="es"
        />
    </div>
  )
}