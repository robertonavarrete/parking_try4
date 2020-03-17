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
        { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
        null,
        { id: 2, number: 2, tooltip: "Cost: 15$" },
        { id: 3, number: 3, isReserved: true, orientation: "east",tooltip: "comentario que aparece al pasar el mouse por encima"},
        null,
        { id: 4, number: 4, orientation: "west" }, 
        { id: 5, number: 5 },
        null,
        { id: 6, number: 6 },
        { id: 7, number: 7, isReserved: true, tooltip: "Reserved by Matthias Nadler"},
        null,
        { id: 8, number: 8, isReserved: true },
        { id: 9, number: 9, isReserved: true, orientation: "east" },
        null,
        { id: 10, number: 10, orientation: "west" },
        { id: 11, number: 11 },
        null,
        { id: 12, number: 12 },
        { id: 13, number: 13 },
        null,
        { id: 14, number: 14 },
        { id: 15, number: 15, isReserved: true, orientation: "east" },
        null,
        { id: 16, number: 16, orientation: "west" }
      ],
      [
        { id: 17, number: 1 },
        null,
        { id: 18, number: 2 },
        { id: 19, number: 3, tooltip: "Cost: 25$" },
        null,
        { id: 20, number: 4 },
        { id: 21, number: 5, orientation: "east" },
        null,
        { id: 22, number: 6, orientation: "west" },
        { id: 23, number: 7 },
        null,
        { id: 24, number: 8 },
        { id: 25, number: 9 },
        null,
        { id: 26, number: 10, orientation: "east" },
        { id: 27, number: 11, isReserved: true },
        null,
        { id: 28, number: 12, orientation: "west" },
        { id: 29, number: 13, tooltip: "Cost: 11$" },
        null,
        { id: 30, number: 14 },
        { id: 31, number: 15 },
        null,
        { id: 32, number: 16 }
      ],
      [
        { id: 33, number: 1 },
        null,
        { id: 34, number: 2 },
        { id: 35, number: 3, tooltip: "Cost: 25$" },
        null,
        { id: 36, number: 4 },
        { id: 37, number: 5, orientation: "east" },
        null,
        { id: 38, number: 6, orientation: "west" },
        { id: 39, number: 7 },
        null,
        { id: 40, number: 8 },
        { id: 41, number: 9 },
        null,
        { id: 42, number: 10, orientation: "east" },
        { id: 43, number: 11, isReserved: true },
        null,
        { id: 44, number: 12, orientation: "west" },
        { id: 45, number: 13, tooltip: "Cost: 11$" },
        null,
        { id: 46, number: 14 },
        { id: 47, number: 15 },
        null,
        { id: 48, number: 16 }
      ],
      [
        { id: 49, number: 1 },
        null,
        { id: 50, number: 2 },
        { id: 51, number: 3, tooltip: "Cost: 25$" },
        null,
        { id: 52, number: 4 },
        { id: 53, number: 5, orientation: "east" },
        null,
        { id: 54, number: 6, orientation: "west" },
        { id: 55, number: 7 },
        null,
        { id: 56, number: 8 },
        { id: 57, number: 9 },
        null,
        { id: 58, number: 10, orientation: "east" },
        { id: 59, number: 11, isReserved: true },
        null,
        { id: 60, number: 12, orientation: "west" },
        { id: 61, number: 13, tooltip: "Cost: 11$" },
        null,
        { id: 62, number: 14 },
        { id: 63, number: 15 },
        null,
        { id: 64, number: 16 }
      ],
      [
        { id: 65, number: 1 },
        null,
        { id: 66, number: 2 },
        { id: 67, number: 3, tooltip: "Cost: 25$" },
        null,
        { id: 68, number: 4 },
        { id: 69, number: 5, orientation: "east" },
        null,
        { id: 70, number: 6, orientation: "west" },
        { id: 71, number: 7 },
        null,
        { id: 72, number: 8 },
        { id: 73, number: 9 },
        null,
        { id: 74, number: 10, orientation: "east" },
        { id: 75, number: 11, isReserved: true },
        null,
        { id: 76, number: 12, orientation: "west" },
        { id: 77, number: 13, tooltip: "Cost: 11$" },
        null,
        { id: 78, number: 14 },
        { id: 79, number: 15 },
        null,
        { id: 80, number: 16 }
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