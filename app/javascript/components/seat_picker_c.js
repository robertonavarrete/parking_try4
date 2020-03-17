import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeatPicker from "react-seat-picker";


export default class App extends Component {
  state = {
    loading: false
  };

  addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id, newTooltip);
        this.setState({ loading: false });
      }
    );
  };


  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        removeCb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    const rows = [
      [
        { id: 1, number: 1, orientation: "west", isSelected: true, tooltip: "Reserved by you" },
        null,
        { id: 2, number: 2, orientation: "west", tooltip: "Cost: 15$" },
        { id: 3, number: 3, isReserved: true, orientation: "east",tooltip: "comentario que aparece al pasar el mouse por encima"},
        null,
        { id: 4, number: 4, orientation: "west" }, 
        { id: 5, number: 5, orientation: "east" },
        null,
        { id: 6, number: 6, orientation: "west" },
        { id: 7, number: 7, orientation: "east", isReserved: true, tooltip: "Reserved by Matthias Nadler"},
        null,
        { id: 8, number: 8, orientation: "west", isReserved: true },
        { id: 9, number: 9, isReserved: true, orientation: "east" },
        null,
        { id: 10, number: 10, orientation: "west", orientation: "west" },
        { id: 11, number: 11, orientation: "east" },
        null,
        { id: 12, number: 12, orientation: "west" },
        { id: 13, number: 13, orientation: "east" },
        null,
        { id: 14, number: 14, orientation: "west" },
        { id: 15, number: 15, isReserved: true, orientation: "east" },
        null,
        { id: 16, number: 16, orientation: "east" }
      ],
      [
        { id: 17, number: 1, orientation: "west" },
        null,
        { id: 18, number: 2, orientation: "west" },
        { id: 19, number: 3 , orientation: "east", tooltip: "Cost: 25$" },
        null,
        { id: 20, number: 4, orientation: "west" },
        { id: 21, number: 5, orientation: "east" },
        null,
        { id: 22, number: 6, orientation: "west", orientation: "west" },
        { id: 23, number: 7, orientation: "east" },
        null,
        { id: 24, number: 8, orientation: "west" },
        { id: 25, number: 9, orientation: "east" },
        null,
        { id: 26, number: 10, orientation: "west" },
        { id: 27, number: 11, orientation: "east", isReserved: true },
        null,
        { id: 28, number: 12, orientation: "west" },
        { id: 29, number: 13, orientation: "east", tooltip: "Cost: 11$" },
        null,
        { id: 30, number: 14, orientation: "west" },
        { id: 31, number: 15, orientation: "east" },
        null,
        { id: 32, number: 16, orientation: "east" }
      ],
      [
        { id: 33, number: 1, orientation: "west" },
        null,
        { id: 34, number: 2, orientation: "west" },
        { id: 35, number: 3 , orientation: "east", tooltip: "Cost: 25$" },
        null,
        { id: 36, number: 4, orientation: "west" },
        { id: 37, number: 5, orientation: "east" },
        null,
        { id: 38, number: 6, orientation: "west" },
        { id: 39, number: 7, orientation: "east"},
        null,
        { id: 40, number: 8, orientation: "west" },
        { id: 41, number: 9, orientation: "east" },
        null,
        { id: 42, number: 10, orientation: "west" },
        { id: 43, number: 11, orientation: "east", isReserved: true },
        null,
        { id: 44, number: 12, orientation: "west" },
        { id: 45, number: 13, orientation: "east", tooltip: "Cost: 11$" },
        null,
        { id: 46, number: 14, orientation: "west" },
        { id: 47, number: 15, orientation: "east" },
        null,
        { id: 48, number: 16, orientation: "east" }
      ],
      [
        { id: 49, number: 1, orientation: "west" },
        null,
        { id: 50, number: 2 , orientation: "west"},
        { id: 51, number: 3 , orientation: "east", tooltip: "Cost: 25$" },
        null,
        { id: 52, number: 4, orientation: "west" },
        { id: 53, number: 5, orientation: "east" },
        null,
        { id: 54, number: 6, orientation: "west" },
        { id: 55, number: 7, orientation: "east" },
        null,
        { id: 56, number: 8, orientation: "west" },
        { id: 57, number: 9, orientation: "east" },
        null,
        { id: 58, number: 10, orientation: "west" },
        { id: 59, number: 11, orientation: "east", isReserved: true },
        null,
        { id: 60, number: 12, orientation: "west" },
        { id: 61, number: 13, orientation: "east", tooltip: "Cost: 11$" },
        null,
        { id: 62, number: 14, orientation: "west" },
        { id: 63, number: 15, orientation: "east" },
        null,
        { id: 64, number: 16, orientation: "east" }
      ],
      [
        { id: 65, number: 1, orientation: "west" },
        null,
        { id: 66, number: 2, orientation: "west" },
        { id: 67, number: 3 , orientation: "east", tooltip: "Cost: 25$" },
        null,
        { id: 68, number: 4, orientation: "west" },
        { id: 69, number: 5, orientation: "east" },
        null,
        { id: 70, number: 6, orientation: "west" },
        { id: 71, number: 7, orientation: "east" },
        null,
        { id: 72, number: 8, orientation: "west" },
        { id: 73, number: 9, orientation: "east" },
        null,
        { id: 74, number: 10, orientation: "west" },
        { id: 75, number: 11, orientation: "east", isReserved: true },
        null,
        { id: 76, number: 12, orientation: "west" },
        { id: 77, number: 13, orientation: "east", tooltip: "Cost: 11$" },
        null,
        { id: 78, number: 14, orientation: "west" },
        { id: 79, number: 15, orientation: "east" },
        null,
        { id: 80, number: 16, orientation: "east" }
      ]
    ];
    const { loading } = this.state;
    return (
      <div>
        <h1>Escoge tu lugar de estacionamiento</h1>
        <div style={{ marginTop: "100px"},{height: "auto"},{ width: "auto"}}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={1}
            alpha
            visible = {true}
            selectedByDefault
            loading={false}
            tooltipProps={{ multiline: true }}
          />
        </div>
      </div>
    );
  }
}