describe("Comments Widget",function(){
    var TestUtils = React.addons.TestUtils;

    it("Should display a nice message when no comments are present", function () {
        expect(true).toBe(false);
    });

    function renderComponent(component) {
        var comment_component = TestUtils.renderIntoDocument(component);
        return $(comment_component.getDOMNode());
    }
});