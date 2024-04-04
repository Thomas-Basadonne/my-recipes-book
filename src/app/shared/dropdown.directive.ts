import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  private dropdownMenu: HTMLElement;

  @HostListener('click') toggleOpen() {
    this.dropdownMenu = this.elementRef.nativeElement.nextElementSibling;
    this.toggleDropdown();
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement) {
    if (!this.elementRef.nativeElement.contains(target)) {
      if (this.dropdownMenu) { // Check if dropdownMenu is not undefined
        this.closeDropdown();
      }
    }
  }  

  private toggleDropdown() {
    if (this.dropdownMenu) {
      if (this.dropdownMenu.classList.contains('show')) {
        this.closeDropdown();
      } else {
        this.openDropdown();
      }
    }
  }

  private openDropdown() {
    this.renderer.addClass(this.dropdownMenu, 'show');
  }

  private closeDropdown() {
    this.renderer.removeClass(this.dropdownMenu, 'show');
  }
}
