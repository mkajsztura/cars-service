import { UserShortcutPipe } from './user-shortcut.pipe';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('UserShortcutPipe', () => {

  describe('Shallow UserShortcutPipe test', () => {
    @Component({
      template: `
        Username: {{ username | userShortcut }}
      `
    })
    class TestComponent {
      username = 'Mateusz';
    }

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let el: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          UserShortcutPipe,
          TestComponent
        ]
      });
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      el = fixture.nativeElement;
    });

    it('should return first letter and dot', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain('Username: M.');
      component.username = 'Andzej';
      fixture.detectChanges();
      expect(el.textContent).toContain('Username: A.');
    });

  });

  describe('Isolate UserShortcutPipe test', () => {
    const pipe = new UserShortcutPipe();

    it('should return first letter and dot', () => {
      expect(pipe.transform('Mateusz')).toBe('M.');
    });

    it('should return empty string', () => {
      expect(pipe.transform('')).toBe('');
    });
  });

});
