import { TextFieldModule } from "@angular/cdk/text-field";
import { MatFormFieldAppearance, MatFormFieldModule } from "@angular/material/form-field";

export type TAppearance = 'fill' | 'outline' | 'legacy';
export type TRadio = {
    type: 'radio';
    prompt: string;
    choices: any[]
    appearance: MatFormFieldAppearance
}

export type TSelect = {
    type: 'select';
    options: any[]
    prompt: string;
    appearance: MatFormFieldAppearance

}

export type TNumber = {
    select: any[];
    prompt: string;
    appearance: MatFormFieldAppearance
    type: 'number';


}

export type TDate = {
    type: 'date';
    prompt: string;
    appearance: MatFormFieldAppearance

}

export type TCheckbox = {
    type: 'checkbox'
    prompt: string;
    choices: any[]
}

export type TextField = {
    placeholder?: string;
    label?: string;
    
    prompt: string;
    type: 'text';
    required?: boolean;
    appearance?: MatFormFieldAppearance



}


export type TextFieldUnion = TextField | TCheckbox | TDate | TRadio | TSelect | TNumber;

export interface TextFieldInit {
    prompt: string;

}