/*
 * This util depends on JQuery.js and Statistics.js
 * 
 * How to use this util: See example in page: temp_3463_mentalhealth_example_delete_it_later.jsp
 * 1. for thirdpard jsp pages, create one json object: var opes_result_data={};
 * 2. prepare the properties for this object opes_result_data
 * 3. call opes_post_result_util_js_opes_post_result(opes_result_data)
 */

function opes_post_result_util_js_opes_post_result(opes_result_data) {

    //get material first
    var argsdata = {
        taskid: opes_result_data.taskid,
        access_token: localStorage.getItem('access_token')
    };
    var data = {
        clazz: 'com.lattice.action.proxy.opes.materials.OPESMaterialsProxy',
        service: 'getOPESMaterialOnlyaMaterialForOneTask',
        args: JSON.stringify(argsdata)
    };
    var success = function (rdata) {
        opes_post_result_util_js_create_result_form();
        opes_post_result_util_js_prepare_radiolistset(opes_result_data, rdata);
        opes_post_result_util_js_analyze_results(opes_result_data);
        opes_post_result_util_js_add_all_results_to_form(opes_result_data);
        opes_post_result_util_js_submit_result(opes_result_data);
    };
    opes_post_result_util_js_invoke_proxy(data, success);

}

function opes_post_result_util_js_prepare_radiolistset(opes_result_data, material) {
    if (material.length > 0) {
        for (var ii = 0; ii < opes_result_data.stimidset.split(";").length && ii < material.length; ii++) {
            if (ii == 0) {

                for (var k = 0; k < material.length; k++) {
                    if (material[k].stimid == opes_result_data.stimidset.split(";")[ii])
                        break;
                }


                radiolist1set = opes_post_result_util_js_trim(material[ii].radio1);
                radiolist2set = opes_post_result_util_js_trim(material[ii].radio2);
                radiolist3set = opes_post_result_util_js_trim(material[ii].radio3);
                radiolist4set = opes_post_result_util_js_trim(material[ii].radio4);
                radiolist5set = opes_post_result_util_js_trim(material[ii].radio5);
                radiolist6set = opes_post_result_util_js_trim(material[ii].radio6);
                radiolist7set = opes_post_result_util_js_trim(material[ii].radio7);
                radiolist8set = opes_post_result_util_js_trim(material[ii].radio8);
                radiolist9set = opes_post_result_util_js_trim(material[ii].radio9);
                radiolist10set = opes_post_result_util_js_trim(material[ii].radio10);
                radiolist11set = opes_post_result_util_js_trim(material[ii].radio11);
                radiolist12set = opes_post_result_util_js_trim(material[ii].radio12);
                radiolist13set = opes_post_result_util_js_trim(material[ii].radio13);
                radiolist14set = opes_post_result_util_js_trim(material[ii].radio14);
                radiolist15set = opes_post_result_util_js_trim(material[ii].radio15);
                radiolist16set = opes_post_result_util_js_trim(material[ii].radio16);
            } else {

                for (var k = 0; k < material.length; k++) {
                    if (material[k].stimid == opes_result_data.stimidset.split(";")[ii])
                        break;
                }
                radiolist1set = radiolist1set + ";" + opes_post_result_util_js_trim(material[ii].radio1);
                radiolist2set = radiolist2set + ";" + opes_post_result_util_js_trim(material[ii].radio2);
                radiolist3set = radiolist3set + ";" + opes_post_result_util_js_trim(material[ii].radio3);
                radiolist4set = radiolist4set + ";" + opes_post_result_util_js_trim(material[ii].radio4);
                radiolist5set = radiolist5set + ";" + opes_post_result_util_js_trim(material[ii].radio5);
                radiolist6set = radiolist6set + ";" + opes_post_result_util_js_trim(material[ii].radio6);
                radiolist7set = radiolist7set + ";" + opes_post_result_util_js_trim(material[ii].radio7);
                radiolist8set = radiolist8set + ";" + opes_post_result_util_js_trim(material[ii].radio8);
                radiolist9set = radiolist9set + ";" + opes_post_result_util_js_trim(material[ii].radio9);
                radiolist10set = radiolist10set + ";" + opes_post_result_util_js_trim(material[ii].radio10);
                radiolist11set = radiolist11set + ";" + opes_post_result_util_js_trim(material[ii].radio11);
                radiolist12set = radiolist12set + ";" + opes_post_result_util_js_trim(material[ii].radio12);
                radiolist13set = radiolist13set + ";" + opes_post_result_util_js_trim(material[ii].radio13);
                radiolist14set = radiolist14set + ";" + opes_post_result_util_js_trim(material[ii].radio14);
                radiolist15set = radiolist15set + ";" + opes_post_result_util_js_trim(material[ii].radio15);
                radiolist16set = radiolist16set + ";" + opes_post_result_util_js_trim(material[ii].radio16);
            }
        }
    } else {
        radiolist1set = '';
        radiolist2set = '';
        radiolist3set = '';
        radiolist4set = '';
        radiolist5set = '';
        radiolist6set = '';
        radiolist7set = '';
        radiolist8set = '';
        radiolist9set = '';
        radiolist10set = '';
        radiolist11set = '';
        radiolist12set = '';
        radiolist13set = '';
        radiolist14set = '';
        radiolist15set = '';
        radiolist16set = '';
    }
}

function opes_post_result_util_js_analyze_results(opes_result_data) {
    opes_result_data.countOfCorrectNumber_ByType = getCorrectCountSortByType(opes_result_data.numset, opes_result_data.correctanswerset, opes_result_data.type4set);
    opes_result_data.countOfCorrectButton_ByType = getCorrectCountSortByType(opes_result_data.buttonset, opes_result_data.correctanswerset, opes_result_data.type4set);
    opes_result_data.countOfCorrectRadio_ByType = getCorrectCountSortByType(opes_result_data.radioset, opes_result_data.correctanswerset, opes_result_data.type4set);
    opes_result_data.countOfCorrectButton_ByType_Corrected = getCorrectCountSortByType_Corrected(opes_result_data.buttonset, opes_result_data.correctanswerset, opes_result_data.type4set);
    opes_result_data.percentageCorrectNumber_ByType = getPercentageCorreceSortByType(opes_result_data.numset, opes_result_data.correctanswerset, opes_result_data.type4set);
    opes_result_data.percentageCorrectButton_ByType = getPercentageCorreceSortByType(opes_result_data.buttonset, opes_result_data.correctanswerset, opes_result_data.type4set);
    opes_result_data.percentageCorrectRadio_ByType = getPercentageCorreceSortByType(opes_result_data.radioset, opes_result_data.correctanswerset, opes_result_data.type4set);
    opes_result_data.meanNumber_ByType = getMeanSortByType(opes_result_data.numset, opes_result_data.type4set);
    opes_result_data.sumNumber_ByType = getSumSortByType(opes_result_data.numset, opes_result_data.type4set);
    opes_result_data.meanRT_ByType = getMeanSortByType(opes_result_data.timeset, opes_result_data.type4set);
    opes_result_data.medianRTButton_ByType_Corrected = getMedianSortByType_Corrected(opes_result_data.buttonset, opes_result_data.correctanswerset, opes_result_data.timeset, opes_result_data.type4set);
    opes_result_data.meanDeviationNumber_ByType = getMeanDeviationSortByType(opes_result_data.numset, opes_result_data.correctanswerset, opes_result_data.type4set);
    opes_result_data.sumWeightedRadio_ByType = getWeightedScoreSortByType(opes_result_data.radioset, opes_result_data.type4set, radiolist1set, radiolist2set, radiolist3set, radiolist4set, radiolist5set, radiolist6set, radiolist7set, radiolist8set, radiolist9set, radiolist10set, radiolist11set, radiolist12set, radiolist13set, radiolist14set, radiolist15set, radiolist16set);
    opes_result_data.type4_Unique = getType(opes_result_data.type4set);
}

//-----------------------------------------------utils--------------------------------
function opes_post_result_util_js_create_result_form() {
    if ($("#opes_post_result_util_js_result_form").length > 0) {

    } else {
        var result_form = '<form id="opes_post_result_util_js_result_form" name="opes_post_result_util_js_result_form" method="post" action="">';
        result_form += '</form>';
        $(document.body).append(result_form);
    }

}

function opes_post_result_util_js_add_result_to_form(id, value) {
    var elem = document.createElement("input");
    elem.setAttribute("type", "text");
    elem.setAttribute("id", id);
    elem.setAttribute("name", id);
    elem.setAttribute("value", value);

    document.getElementById("opes_post_result_util_js_result_form").appendChild(elem);
}


function opes_post_result_util_js_add_all_results_to_form(opes_result_data) {
    opes_post_result_util_js_add_result_to_form("taskid", opes_result_data.taskid);
    opes_post_result_util_js_add_result_to_form("sumitcoids", opes_result_data.sumitcoids);
    opes_post_result_util_js_add_result_to_form("targetpagename", opes_result_data.targetpagename);
    opes_post_result_util_js_add_result_to_form("type4", opes_result_data.type4);
    opes_post_result_util_js_add_result_to_form("codematerial", opes_result_data.codematerial);
    opes_post_result_util_js_add_result_to_form("uid", opes_result_data.uid);
    opes_post_result_util_js_add_result_to_form("lan", opes_result_data.lan);
    opes_post_result_util_js_add_result_to_form("projectid", opes_result_data.projectid);
    //////////////////////////////////////////////////////////////////
    opes_post_result_util_js_add_result_to_form("correct_result", opes_result_data.correct_result);
    opes_post_result_util_js_add_result_to_form("user_result", opes_result_data.user_result);
    opes_post_result_util_js_add_result_to_form("duration", opes_result_data.duration);
    opes_post_result_util_js_add_result_to_form("user_time", opes_result_data.user_time);
    ///////////////////////////////////////////////////////////////////
    opes_post_result_util_js_add_result_to_form("type4set", opes_result_data.type4set);
    opes_post_result_util_js_add_result_to_form("stimidset", opes_result_data.stimidset);
    opes_post_result_util_js_add_result_to_form("correctanswerset", opes_result_data.correctanswerset);
    opes_post_result_util_js_add_result_to_form("numset", opes_result_data.numset);
    opes_post_result_util_js_add_result_to_form("timeset", opes_result_data.timeset);
    opes_post_result_util_js_add_result_to_form("timeaverage", opes_result_data.timeaverage);
    opes_post_result_util_js_add_result_to_form("radioset", opes_result_data.radioset);
    opes_post_result_util_js_add_result_to_form("buttonset", opes_result_data.buttonset);
    opes_post_result_util_js_add_result_to_form("commentset", opes_result_data.commentset);

    //alert(opes_result_data.eventonsetset)
    if (opes_result_data.eventonsetset != null) {
        opes_post_result_util_js_add_result_to_form("eventonsetset", opes_result_data.eventonsetset);
    }

    opes_post_result_util_js_add_result_to_form("countOfCorrectNumber_ByType", opes_result_data.countOfCorrectNumber_ByType);
    opes_post_result_util_js_add_result_to_form("countOfCorrectButton_ByType", opes_result_data.countOfCorrectButton_ByType);
    opes_post_result_util_js_add_result_to_form("countOfCorrectRadio_ByType", opes_result_data.countOfCorrectRadio_ByType);
    opes_post_result_util_js_add_result_to_form("countOfCorrectButton_ByType_Corrected", opes_result_data.countOfCorrectButton_ByType_Corrected);
    opes_post_result_util_js_add_result_to_form("percentageCorrectNumber_ByType", opes_result_data.percentageCorrectNumber_ByType);
    opes_post_result_util_js_add_result_to_form("percentageCorrectButton_ByType", opes_result_data.percentageCorrectButton_ByType);
    opes_post_result_util_js_add_result_to_form("percentageCorrectRadio_ByType", opes_result_data.percentageCorrectRadio_ByType);
    opes_post_result_util_js_add_result_to_form("meanNumber_ByType", opes_result_data.meanNumber_ByType);
    opes_post_result_util_js_add_result_to_form("sumNumber_ByType", opes_result_data.sumNumber_ByType);
    opes_post_result_util_js_add_result_to_form("meanRT_ByType", opes_result_data.meanRT_ByType);
    opes_post_result_util_js_add_result_to_form("meanDeviationNumber_ByType", opes_result_data.meanDeviationNumber_ByType);
    opes_post_result_util_js_add_result_to_form("sumWeightedRadio_ByType", opes_result_data.sumWeightedRadio_ByType);
    opes_post_result_util_js_add_result_to_form("type4_Unique", opes_result_data.type4_Unique);
}

function opes_post_result_util_js_submit_result(opes_result_data) {
    postWebMathData(opes_result_data);
    // document.getElementById("opes_post_result_util_js_result_form").submit();  //废用的表单提交
}

function opes_post_result_util_js_invoke_proxy(data, success_callback) {
    $.ajax({
            type: "POST",
            async: true,
            cache: false,
            dataType: "json",//which is expected from the sever
            url: "http://www.dweipsy.com/lattice/CommonActionThirdPartyProxy",
            data: data,
            beforeSend: function (XMLHttpRequestObject) {
                //show_loading_msg();
            },
            success: function (rdata, textStatus, XMLHttpRequest) {
                //alert($.isEmptyObject(rdata));
                //if 200 ok, Even if the server do not return json object (e.g. return nothing), it will go into this success function.
                //show_success_msg();
                success_callback(rdata);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                //show_error_msg();
                alert("Error Msg: textStatus=" + textStatus + "  errorThrown=" + errorThrown);
            },
            complete: function (jqXHR, textStatus) {

            }
        });
}

function opes_post_result_util_js_trim(s) {
    return $.trim(s);
}
