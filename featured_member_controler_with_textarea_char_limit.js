var main_feature = null;
window.addEvent("domready", function() {
	main_feature = new List_Controller({
		id: "main_feature",
		target: "main-feature-container",
		datasource: application_webroot + "cfc/core/lists/featured/original.cfc",
		item_controller_class: Featured_Extended_List_Item_Controller,
		site_path: "homepage",
		page_section:"main_feature",
		method: "get",
		restrict_by_language: true,
		form: {
			id: "featured-form",
			src: application_webroot + "script/list/controllers/featured/original/extended/form.cfm?headlinelabel=Featured_Member"
    },

		item_controller_custom_options: {
         do_descriptions: true,
         do_image: true,
         do_thumbnails: false
    },

  types: [
    {
      label: "Committee Members",
      views: {
        get: { // related view
          view: "committee_members_related_vw",
          unid_field: "content_uid",
          title_field: "full_name"
        },
        selector: { // content view
          view: "SE_members_vw",
          unid_field: "uid",
          title_field: "full_name"
        }
      },
      cols: [
        { column: "full_name", print: true, label: "Name (party)", print_label_in_result: false, searchable: true, sortable: true, sort_column: true, sort_order: "ASC" }
      ],
      selector_title: "Members",
      selector_description: "<p>Please select one member from the list below.</p>",
      selector_no_results_text: "<p>[ We're sorry, there were no members. ]</p>",
      amend_content_location_type: "member"
    }
	],
	title: "Home Page Featured Member",
	description: "<p>This is the featured member to display on the homepage</p>",
	max_items: 2
  });
});


$(function(){
  var el = $('#main-feature-container');
  var list = $('.control-list.sortable');
  var listItem = $('#main_feature-li-0');

  if(!el || !list || !listItem) return;

  setTimeout(function() {
    var button = $('#main_feature-li-0 .padder .links a.btn.listbuttons');

    button.on('click', function(){
      alert('past edit button');
      var summary = $('#main_feature-summary-0');
      console.log(summary);

      if(!summary)return;

      summary.on('keyup',function() {
        $('#the-count').remove();
        var count = '<div id="the-count">Maximum characters allowed: <span id="current">0</span><span id="maximum">/ 147</span></div>'

        $('label[for="main_feature-summary-0"]').append(count);

        var characterCount = $(this).val().length,
            current = $('#current'),
            maximum = $('#maximum'),
            theCount = $('#the-count');
        current.text(characterCount);

        var maxElementCharacterCount = 147;

        if (characterCount >= maxElementCharacterCount) {
          maximum.css('color', '#8f0001');
          current.css('color', '#8f0001');
          theCount.css('font-weight','bold');
        } else {
          maximum.css('color','#666');
          theCount.css('font-weight','normal');
        }
      });
    })

  }, 5000);

});
