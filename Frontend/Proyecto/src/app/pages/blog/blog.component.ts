import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarBlogComponent } from './listar-blog.component';

describe('ListarBlogComponent', () => {
  let component: ListarBlogComponent;
  let fixture: ComponentFixture<ListarBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarBlogComponent]
    });
    fixture = TestBed.createComponent(ListarBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent{
}
