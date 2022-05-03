import React from "react";

export default class AddCourseModal extends React.Component {

    render(){
        return (
            <div id="addCourseModal" className="modal fade" aria-hidden="true" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Create A New Course</h4>
                        <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <form action="" method="">
                            <div className="form-group">
                                <label>Course Name:</label>
                                <input type="text" className="form-control" id="courseName" placeholder="Enter Course Name" required></input>
                                <div className="invalid-feedback">Enter a valid course name.</div>
                            </div>
                            <div className="form-group">
                                <label>Number of Lessons:</label>
                                <input type="number" className="form-control" id="courseLessons"  min="0" max="42" onkeyup="if(parseInt(this.value)>42){ this.value =42; return false; }" required></input>
                                <div className="invalid-feedback">Enter a valid semester.</div>
                            </div>
                            <button type="button" className="btn btn-primary btn-block" data-bs-dismiss="modal">Publish Course & Create Invite</button>
                        </form>
                     </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
