import { Button } from "../UI/Button";

export function SimpleInput() {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <Button>Submit</Button>
      </div>
    </form>
  );
}
