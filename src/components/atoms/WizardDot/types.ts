export interface WizardDotprops {
    dotsStructure: DotsType[];
    click(index: number): void;
};

interface DotsType {
    index: number;
    active: boolean;
}