class LoadingComponent extends Component{
    constructor(parent, className, appManager) {
        super(parent, className, appManager);

        const text = p({'classname':'loadingComponent_text', 'innerHTML':'Loading...'}, this.container, null);
        
        
    }

    hide(){
        gsap.to(this.container, {duration : 0.8, opacity : 0 , onComplete : this.onCompleteHide.bind(this)});
    }

    onCompleteHide(){
        super.hide();
    }
}