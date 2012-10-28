TimeTravel.Routers.TripRouter = Backbone.Router.extend({
  //##routes
  routes: {
    "": "index",
    "trips/:id": "tripDetail",
  },
  //##routes

  //##initialize
  initialize: function() {
    this.topNavigationView = new TimeTravel.Views.TopNavigationView();
    this.sidebarView = new TimeTravel.Views.SidebarView();
  },
  //##initialize

  //##refactor
  container: function() {
    return $('#container');
  },

  content: function() {
    return $('#content');
  },

  pageHasContent: function() {
    return $.trim(this.container().html()) != "";
  },

  layout: function() {
    if (this.pageHasContent()) {
      return;
    }
    this.container().append(this.topNavigationView.render().el);
    this.container().append(this.sidebarView.render().el);
    this.container().append($("<div/>").attr("id", "content"));
  },

  index: function() {
    var tripsView = new TimeTravel.Views.TripsView({
        collection: TimeTravel.trips});
    this.layout();
    this.content().html(tripsView.render().el);
    return this.container();
  },

  tripDetail: function(id) {
    var tripDetailView = new TimeTravel.Views.TripDetailView({
        model: TimeTravel.getTrip(id)});
    this.layout();
    this.content().html(tripDetailView.render().el);
    return this.container();
  }
  //##refactor

});

