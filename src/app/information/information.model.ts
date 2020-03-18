export class InformationModel{
    public title:string;
    public description:string;
    public place:string;
    public price:number;
    public imgPath:string;
    public eventDate:Date;
    constructor(eventTitle:string,eventDescription:string, eventPlace:string, eventPrice:number,eventImg:string,eDate:Date){
        this.title=eventTitle;
        this.description=eventDescription;
        this.place=eventPlace;
        this.price=eventPrice;
        this.imgPath=eventImg;
        this.eventDate=eDate;

    }
}