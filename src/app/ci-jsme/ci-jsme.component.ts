import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ci-jsme',
  templateUrl: './ci-jsme.component.html',
  styleUrls: ['./ci-jsme.component.css']
})
export class CiJsmeComponent implements OnInit, AfterViewInit, OnDestroy{
  @Input() elementId: string;
  @Output() onEditorContentChange = new EventEmitter();
  @Input() width: number = 380;
  @Input() height: number = 340;
  @Input() molString: string;
  @Input() showDemo: boolean = true;
  @Input() option: string;

  applet;
  smiles: string;
  _demoSmiles = "CC1([C@@H](N2[C@H](S1)[C@@H](C2=O)NC(=O)CC3=CC=CC=C3)C(=O)O)C"
  constructor() {
  }

  ngOnInit() {
    console.log('JSME Page init ...')
  }

  readMolString(molString: String){
    this.applet.readGenericMolecularInput(molString);
  }

  ngAfterViewInit() {
    console.log('JSME init...');
    setTimeout(() =>{
      console.log(typeof (JSApplet))
      if (typeof (JSApplet) != 'undefined' && typeof (this.applet) == 'undefined') {
        this.applet = new JSApplet.JSME(
          this.elementId,
          this.width.toString() + 'px',
          this.height.toString() + 'px', {
            options: this.option
          });
        if (this.showDemo) {
          this.readMolString(this._demoSmiles);
        }
        this.applet.setAfterStructureModifiedCallback(() => {
          this.smiles = this.applet.smiles();
          console.log('structure modified! current smiles: ' + this.smiles);

        })
      }
    }, 1000)

  }

  ngOnDestroy() {

  }

}
