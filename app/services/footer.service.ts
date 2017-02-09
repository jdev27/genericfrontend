import '../models/footer.model';

export class FooterService {

    getFooters(): Footer[] {
        return [{label: 'footer1', link: 'link1'},
            {label: 'footer2', link: 'link2'},
            {label: 'footer3', link: 'link3'}];
    }
}