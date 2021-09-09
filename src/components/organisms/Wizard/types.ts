export interface Wizardprops {
    dotsStructure: DotsType[];
    selectDot(index: number): void;
};

interface DotsType {
    index: number;
    active: boolean;
}