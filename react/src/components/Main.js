import React, { Component } from 'react';
import '../Styles/App.css';
import { getListOfBattles, getBattleData } from "../actions/api";
import { connect } from "react-redux";
import VirtualizedSelect from 'react-virtualized-select'
let battleKeys = [];
class Main extends Component {

  state = {
    battlesArray: [],
    selectedValue: {},
    battlesInformation: [],
    showInformation: false
  };

  componentDidMount() {
    this.props.getListOfBattles(this.state.searchText)
      .then(() => {
        let response = this.props.list_data;
        let computedArray = [];
        response.data.map(function (battle) {
          computedArray.push({ label: battle, value: battle });
        })
        this.setState({
          battlesArray: computedArray
        })
      })
      .catch((err) => {
        console.log(err)
      });
  }

  setSelectedValue = (value) => {
    this.setState({
      selectedValue: value,
      showInformation: false,
      battlesInformation: []
    });
  }

  getBattleData = () => {
    this.props.getBattleData(this.state.selectedValue.value)
      .then(() => {
        let response = this.props.battle_data;
        this.setState({
          battlesInformation: response.data,
          showInformation: true
        });
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getArrayKeys = () => {
    this.state.battlesInformation.map((battle) => {
      if (battleKeys.indexOf('index') < 0) battleKeys.push('index')
      return Object.keys(battle).forEach((key) => {
        if (battleKeys.indexOf(key) < 0)
          battleKeys.push(key)
      })
    });
  }

  displayKeyValuePair = (obj, index) => {
    if (this.state.showInformation) {
      return (
        <div>
          {
            battleKeys.map((item) => {
              if (item == 'index') {
                return (
                  <div>
                    <h5 className="p-2">Battle Data of War-{index + 1}</h5>
                  </div>
                )
              }
              if (obj[item]) {
                return (
                  <div className="pl-2">
                    <p><b>{`${item}:`}</b> {`${obj[item]}`}</p>
                  </div>
                )
              }
            })
          }
        </div>
      )
    }
  }

  render = () => {
    if (this.state.battlesInformation.length && !battleKeys.length) {
      this.getArrayKeys()
    }
    return (
      <div>
        <div className="row mx-0">
          <div className="col-12 px-0">
            <div className="App">
              <div className="mt-2 p-2">
                <div className="select-button-container">
                  <span>Location: </span>
                  <VirtualizedSelect
                    options={this.state.battlesArray}
                    onChange={(selectedValue) => this.setSelectedValue(selectedValue)}
                    value={this.state.selectedValue}
                    className="w-100 text-left"
                  />
                  <button className="btn btn-primary" onClick={() => { this.getBattleData() }}>Submit</button>
                </div>
                <div className="mt-4">
                  <h4 className="mb-4">
                    {
                      this.state.selectedValue && this.state.selectedValue.value && this.state.showInformation ?
                        `Battles fought in ${this.state.selectedValue.value}`
                        :
                        null
                    }
                  </h4>
                  <div>
                    {
                      this.state.battlesInformation.map((battle, index) => {
                        return this.displayKeyValuePair(battle, index)
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list_data: state.data.list_data,
    battle_data: state.data.battle_data
  };
}
export default connect(mapStateToProps, { getListOfBattles, getBattleData })(Main);
