import React from 'react';
import foods from './../foods.json';
import AddFood from './AddFood';
import Search from './Search';
class FoodBox extends React.Component {
  state = {
    foods: foods,
    showForm: true,
    todaysList: [],
    calories: 0,
  };
  addNewFood = (newFood) => {
    const updatedFoods = [newFood, ...this.state.foods];
    this.setState({ foods: updatedFoods });
  };
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };
  filteredFoods = (searchStr) => {
    const filteredFoods = foods.filter((oneFood) =>
      oneFood.name.toLowerCase().includes(searchStr.toLowerCase())
    );
    this.setState({ foods: filteredFoods });
  };

  //   addToday = (name, quantity, calories) => {
  //     const thisFood = {
  //       name,
  //       quantity,
  //       calories,
  //     };

  //     const newList = [...this.state.todaysList];

  //     const thisItem = newList.find(({ name }) => name === thisItem.name);

  //     if (thisItem === undefined) {
  //       newList.unshift(thisFood);
  //     } else {
  //       thisItem.quantity += Number(thisFood.quantity);
  //     }

  //     let updatedCalories = calories * quantity + this.state.calories;
  //     this.setState({ todaysList: newList, calories: updatedCalories });
  //   };

  render() {
    return (
      <div>
        <Search filteredFoods={this.filteredFoods} />
        <br />
        <h1>Food list</h1>
        <button onClick={this.toggleForm}>
          {this.state.showForm ? 'Close' : 'Add New Food'}
        </button>
        {this.state.showForm && <AddFood addNewFood={this.addNewFood} />}
        {this.state.foods.map((food) => {
          return (
            <div key={food.image} className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={food.image} alt="" />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{food.name}</strong> <br />
                      <small>{food.calories}</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="number" value="1" />
                    </div>
                    <div className="control">
                      <button
                        className="button is-info"
                        onClick={this.addToday}
                        name="add-more"
                      >
                        +
                      </button>
                      {/* {this.state.todaysList.map((food) => {
                        return (
                          <ul >
                            <li>{food.name} </li>
                            <li> {food.quantity} = </li>
                            <li> {food.quantity * food.calories} calories</li>
                          </ul>
                        );
                      })} */}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    );
  }
}
export default FoodBox;
