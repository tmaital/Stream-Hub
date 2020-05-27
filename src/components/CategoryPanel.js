import React, {Component} from "react"
import { withTranslation } from 'react-i18next';

import "./category-panel.css"
import CategoryButton from "./CategoryButton"

class CategoryPanel extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedCategory: 0,
            kidsLine: null,
            lecturesLine: null,
            fitnessLine: null,
            funLine: null,
            otherLine: null,
        }   
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(name){
                this.setState({selectedCategory: name})
            if (name === 0) {this.setState({kidsLine: null, lecturesLine: null, fitnessLine: null, funLine: null, otherLine: null})
                this.props.cat("kids")} else
            if (name === 1) {this.setState({kidsLine: 1, lecturesLine: null, fitnessLine: null, funLine: null, otherLine: null})
                this.props.cat("kids")} else
            if (name === 2) {this.setState({kidsLine: null, lecturesLine: 1, fitnessLine: null, funLine: null, otherLine: null})
                this.props.cat("lectures")} else
            if (name === 3) {this.setState({kidsLine: null, lecturesLine: null, fitnessLine: 1, funLine: null, otherLine: null})
                this.props.cat("fitness")} else
            if (name === 4) {this.setState({kidsLine: null, lecturesLine: null, fitnessLine: null, funLine: 1, otherLine: null})
                this.props.cat("fun")} else
            if (name === 5) {this.setState({kidsLine: null, lecturesLine: null, fitnessLine: null, funLine: null, otherLine: 1})
                this.props.cat("other")}
    }

    render(){

        const { t } = this.props
        
        const categoryTypes = [
            {id: 0, type: "All"},
            {id: 1, type: "Kids"}, 
            {id: 2, type: "Lectures"}, 
            {id: 3, type: "Fitness"}, 
            {id: 4, type: "Fun"},
            {id: 5, type: "Other"},

        ]

        const categoryButtons = categoryTypes.map(type => 
            <CategoryButton 
            key={type.id} 
            name={type.id} 
            category={type.type} 
            color={type.color}
            selected={this.state.selectedCategory}
            handleClick={this.handleClick}
            />
        )
                                    
        return(
            <div className="category-panel-flex">
                <div className="category-panel">
                    {categoryButtons}
                </div>
            </div>
        )
    }
}

export default withTranslation()(CategoryPanel)