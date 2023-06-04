import React, { Component } from "react";
import { nanoid } from "nanoid";
import { FormContainer, Input, Label } from "components/Form/Form.styled";

export class Filter extends Component {
    filterId = nanoid();
    render() {
        const { value, onChange } = this.props;
        return (
            <FormContainer>
                <Label htmlFor="">Find contacts by name</Label>
                <Input
                    id={this.filterId}
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                />
            </FormContainer>
        )
    }
}