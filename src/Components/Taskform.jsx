export default function Taskform() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Task Name" />
                 <button type="submit">Add Task</button>
            </div>

            <div>
                <select>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <select>
                    <option value="genaral">genaral</option>
                    <option value="work">work</option>
                    <option value="personal">personal</option>
                </select>
            </div>
        </form> 
 )
}