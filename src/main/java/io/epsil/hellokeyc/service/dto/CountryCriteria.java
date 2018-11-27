package io.epsil.hellokeyc.service.dto;

import java.io.Serializable;
import java.util.Objects;
import io.github.jhipster.service.filter.BooleanFilter;
import io.github.jhipster.service.filter.DoubleFilter;
import io.github.jhipster.service.filter.Filter;
import io.github.jhipster.service.filter.FloatFilter;
import io.github.jhipster.service.filter.IntegerFilter;
import io.github.jhipster.service.filter.LongFilter;
import io.github.jhipster.service.filter.StringFilter;

/**
 * Criteria class for the Country entity. This class is used in CountryResource to
 * receive all the possible filtering options from the Http GET request parameters.
 * For example the following could be a valid requests:
 * <code> /countries?id.greaterThan=5&amp;attr1.contains=something&amp;attr2.specified=false</code>
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
public class CountryCriteria implements Serializable {

    private static final long serialVersionUID = 1L;

    private LongFilter id;

    private StringFilter iso2;

    private StringFilter iso3;

    private IntegerFilter m49;

    private StringFilter name;

    private StringFilter officialNameEn;

    private StringFilter officialNameFr;

    private StringFilter dial;

    private StringFilter tld;

    private StringFilter flag32;

    private StringFilter flag128;

    private StringFilter latitude;

    private StringFilter longitude;

    private IntegerFilter zoom;

    public CountryCriteria() {
    }

    public LongFilter getId() {
        return id;
    }

    public void setId(LongFilter id) {
        this.id = id;
    }

    public StringFilter getIso2() {
        return iso2;
    }

    public void setIso2(StringFilter iso2) {
        this.iso2 = iso2;
    }

    public StringFilter getIso3() {
        return iso3;
    }

    public void setIso3(StringFilter iso3) {
        this.iso3 = iso3;
    }

    public IntegerFilter getm49() {
        return m49;
    }

    public void setm49(IntegerFilter m49) {
        this.m49 = m49;
    }

    public StringFilter getName() {
        return name;
    }

    public void setName(StringFilter name) {
        this.name = name;
    }

    public StringFilter getOfficialNameEn() {
        return officialNameEn;
    }

    public void setOfficialNameEn(StringFilter officialNameEn) {
        this.officialNameEn = officialNameEn;
    }

    public StringFilter getOfficialNameFr() {
        return officialNameFr;
    }

    public void setOfficialNameFr(StringFilter officialNameFr) {
        this.officialNameFr = officialNameFr;
    }

    public StringFilter getDial() {
        return dial;
    }

    public void setDial(StringFilter dial) {
        this.dial = dial;
    }

    public StringFilter getTld() {
        return tld;
    }

    public void setTld(StringFilter tld) {
        this.tld = tld;
    }

    public StringFilter getFlag32() {
        return flag32;
    }

    public void setFlag32(StringFilter flag32) {
        this.flag32 = flag32;
    }

    public StringFilter getFlag128() {
        return flag128;
    }

    public void setFlag128(StringFilter flag128) {
        this.flag128 = flag128;
    }

    public StringFilter getLatitude() {
        return latitude;
    }

    public void setLatitude(StringFilter latitude) {
        this.latitude = latitude;
    }

    public StringFilter getLongitude() {
        return longitude;
    }

    public void setLongitude(StringFilter longitude) {
        this.longitude = longitude;
    }

    public IntegerFilter getZoom() {
        return zoom;
    }

    public void setZoom(IntegerFilter zoom) {
        this.zoom = zoom;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        final CountryCriteria that = (CountryCriteria) o;
        return
            Objects.equals(id, that.id) &&
            Objects.equals(iso2, that.iso2) &&
            Objects.equals(iso3, that.iso3) &&
            Objects.equals(m49, that.m49) &&
            Objects.equals(name, that.name) &&
            Objects.equals(officialNameEn, that.officialNameEn) &&
            Objects.equals(officialNameFr, that.officialNameFr) &&
            Objects.equals(dial, that.dial) &&
            Objects.equals(tld, that.tld) &&
            Objects.equals(flag32, that.flag32) &&
            Objects.equals(flag128, that.flag128) &&
            Objects.equals(latitude, that.latitude) &&
            Objects.equals(longitude, that.longitude) &&
            Objects.equals(zoom, that.zoom);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
        id,
        iso2,
        iso3,
        m49,
        name,
        officialNameEn,
        officialNameFr,
        dial,
        tld,
        flag32,
        flag128,
        latitude,
        longitude,
        zoom
        );
    }

    @Override
    public String toString() {
        return "CountryCriteria{" +
                (id != null ? "id=" + id + ", " : "") +
                (iso2 != null ? "iso2=" + iso2 + ", " : "") +
                (iso3 != null ? "iso3=" + iso3 + ", " : "") +
                (m49 != null ? "m49=" + m49 + ", " : "") +
                (name != null ? "name=" + name + ", " : "") +
                (officialNameEn != null ? "officialNameEn=" + officialNameEn + ", " : "") +
                (officialNameFr != null ? "officialNameFr=" + officialNameFr + ", " : "") +
                (dial != null ? "dial=" + dial + ", " : "") +
                (tld != null ? "tld=" + tld + ", " : "") +
                (flag32 != null ? "flag32=" + flag32 + ", " : "") +
                (flag128 != null ? "flag128=" + flag128 + ", " : "") +
                (latitude != null ? "latitude=" + latitude + ", " : "") +
                (longitude != null ? "longitude=" + longitude + ", " : "") +
                (zoom != null ? "zoom=" + zoom + ", " : "") +
            "}";
    }

}
