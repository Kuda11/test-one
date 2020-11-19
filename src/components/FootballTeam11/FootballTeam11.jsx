import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import footballData from '../../data/footballData'
import { v4 as uuid } from 'uuid'

const columnsFromBackend = {
  [uuid()]: {
    name: "Whole Team",
    items: footballData.map(player => {
      return {
        id: player.id,
        name: player.name,
        position: player.position
      }
    }) 
  },
  [uuid()]: {
    name: "GK",
    items: []
  },
  [uuid()]: {
    name: "DEF",
    items: []
  },
  [uuid()]: {
    name: "MID",
    items: []
  },
  [uuid()]: {
    name: "FWD",
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function FootballTeam11() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={"" + item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {item.name}
                                    {item.position}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default FootballTeam11;

// import React from "react";
// import styles from "./FootballTeam11.module.scss";

// const FootballTeam11 = () => {
//   return (
//     <div className={styles.app}>
//       <header>
//         <h1>Drag your players</h1>
//       </header>
//       <div className={styles.lists}>
//         <div className={styles.listItem} draggable="true">Player 1</div>
//         <div className={styles.listItem} draggable="true">Player 2</div>
//         <div className={styles.listItem} draggable="true">Player 3</div>
//       </div>

//       <div className={styles.list}></div>
//       <div className={styles.list}></div>
//     </div>
//   );
// };

// export default FootballTeam11;
