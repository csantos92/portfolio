export class Card{

    constructor(
        public image: string,
        public title: string,
        public subtitle: string,
        public tecs: Array<string>,
        public siteIcons: Array<string>,
        public sites: Array<string>
    ){}
}