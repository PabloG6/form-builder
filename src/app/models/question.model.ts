import { MatFormFieldAppearance } from "@angular/material-experimental/mdc-form-field";

export class QuestionModel {
    title: string;
    required: boolean;
    question_type: 'CHECKBOX' | 'SHORT_ANSWER' | 'LONG_ANSWER' | 'RADIO' | 'DATE' | 'TIME' | 'shortAnswer';
    options: any[]
    value?: any;
    question_id: string;
    label?: string;
    placeholder?: string;
    

    appearance: MatFormFieldAppearance



}