import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important for @if/@for if not using signals
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'mean-crud';
  readonly APIUrl = "http://localhost:5038/api/citizenship/";
  citizens: any = [];

  // Track the ID of the citizen being edited
  editingId: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.http.get(this.APIUrl + 'GetCitizens').subscribe(data => {
      this.citizens = data;
    });
  }

  // Helper to extract values from inputs
  private getFormData() {
    const formData = new FormData();
    if (this.editingId) formData.append("id", this.editingId);

    formData.append("name", (document.getElementById("newName") as HTMLInputElement).value);
    formData.append("nation", (document.getElementById("newNation") as HTMLInputElement).value);
    formData.append("vision", (document.getElementById("newVision") as HTMLInputElement).value);
    formData.append("weaponType", (document.getElementById("newWeapon") as HTMLInputElement).value);
    formData.append("role", (document.getElementById("newRole") as HTMLInputElement).value);
    return formData;
  }

  // Resets the text boxes and the editing state
  private clearInputs() {
    this.editingId = null;
    (document.getElementById("newName") as HTMLInputElement).value = "";
    (document.getElementById("newNation") as HTMLInputElement).value = "";
    (document.getElementById("newVision") as HTMLInputElement).value = "";
    (document.getElementById("newWeapon") as HTMLInputElement).value = "";
    (document.getElementById("newRole") as HTMLInputElement).value = "";
  }

  addCitizen() {
    const data = this.getFormData();
    this.http.post(this.APIUrl + 'AddCitizen', data).subscribe(res => {
      alert(res);
      this.clearInputs();
      this.refreshList();
    });
  }

  fillEditForm(c: any) {
    this.editingId = c.id; // Lock in the ID we want to change
    (document.getElementById("newName") as HTMLInputElement).value = c.name;
    (document.getElementById("newNation") as HTMLInputElement).value = c.nation;
    (document.getElementById("newVision") as HTMLInputElement).value = c.vision;
    (document.getElementById("newWeapon") as HTMLInputElement).value = c.weaponType;
    (document.getElementById("newRole") as HTMLInputElement).value = c.role;

    // Scroll to top so user sees the form is filled
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateCitizen() {
    const data = this.getFormData();
    this.http.put(this.APIUrl + 'UpdateCitizen', data).subscribe(res => {
      alert(res);
      this.clearInputs();
      this.refreshList();
    });
  }

  cancelEdit() {
    this.clearInputs();
  }

  deleteCitizen(id: any) {
    this.http.delete(this.APIUrl + 'DeleteCitizen?id=' + id).subscribe(res => {
      alert(res);
      this.refreshList();
    });
  }
}
